const loadPhone = async (searchText) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {

    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
        
    phoneContainer.textContent= '';

    // clear phone container cards before adding new cards

    const showAllContainer = document.getElementById('show-all-container'); 
    if(phones.length > 12){
      showAllContainer.classList.remove('hidden')
    }
    else
    {
      showAllContainer.classList.add('hidden')
    }

    // display only 12 phones 

    phones = phones.slice(0,12); 


    phones.forEach(phone => {

        console.log(phone);

        const phoneCard = document.createElement('div');

        phoneCard.classList = 'card p-4 bg-base-100 shadow-xl'

        phoneCard.innerHTML = ` 
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title flex justify-center text-center">${phone.phone_name}</h2>
          <p></p>
          <div class="card-actions justify-center">
            <button class="btn btn-gray ">Buy Now</button>
          </div>
        </div>
        `; 

        phoneContainer.appendChild(phoneCard)
    })
}

const handleSearch = () => {
   const searchField = document.getElementById('search-field'); 
   const searchText = searchField.value; 
   console.log(searchText);
   loadPhone(searchText); 
}

const handleSearch2 = () => {

  const searchField = document.getElementById('search-field2'); 
  const searchText = searchField.value; 
  loadPhone(searchText); 
}
// loadPhone(); 