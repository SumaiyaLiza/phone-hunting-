const loadPhone = async (searchText, isShowAll) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {

  // console.log(phones);

  const phoneContainer = document.getElementById('phone-container');

  phoneContainer.textContent = '';

  // clear phone container cards before adding new cards

  const showAllContainer = document.getElementById('show-all-container');
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove('hidden')
  }
  else {
    showAllContainer.classList.add('hidden')
  }

  // console.log('is show all' , isShowAll);

  // display only 12 phones if not show all

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }


  phones.forEach(phone => {

    // console.log(phone);

    const phoneCard = document.createElement('div');

    phoneCard.classList = 'card p-4 bg-base-100 shadow-xl'

    phoneCard.innerHTML = ` 
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title flex justify-center text-center">${phone.phone_name}</h2>
          <p class = "text-center" >There Are many variations of passages of available , but the majority have suffered</p>
          <h2 class = "flex justify-center font-bold">$999</h2>
          <div class="card-actions justify-center">
            <button onclick = "handleShowDetail('${phone.slug}');" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `;

    phoneContainer.appendChild(phoneCard)
  });

  // hide loading spinner 

  toggleLoader(false);
}

// showDetail

const handleShowDetail = async (id) => {

  // console.log('click',id);

  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  // console.log(data);
  const phone = data.data;
  showPhoneDetails(phone);

}

const showPhoneDetails = (phone) => {
  console.log(phone);
  show_details_modal.showModal();
  const phoneName = document.getElementById('show-detail-name');
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML = `
    
   <img src = "${phone.image}"/>
    <p><span> Brand :  </span>${phone?.brand}</p>
    <p><span>Storage: </span> ${phone?.mainFeatures?.storage}</p>
    <p> <span> Display: </span> ${phone?.mainFeatures?.displaySize}</p>
  
  
  
  `
}

const handleSearch = (isShowAll) => {

  toggleLoader(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  //  console.log(searchText);
  loadPhone(searchText, isShowAll);
}



const toggleLoader = (isLoading) => {

  const Loader = document.getElementById('loader');
  if (isLoading) {
    Loader.classList.remove('hidden')
  }

  else {
    Loader.classList.add('hidden');
  }
}


const handleShowAll = () => {

  handleSearch(true);
}
// loadPhone(); 