function processData(data) {
  return data.map(function(item){
    return `
      <form class="form-edit-item" data-contact-id="${item.objectId}">
        <input class="input-first" type="text" placeholder="First Name">${item.FirstName}</input>
        <input class="input-last" type="text" placeholder="Last Name">${item.LastName}</input>
        <input class="input-email" type="email" placeholder="Email">${item.Email}</input>
        <input class="input-phone" type="text" placeholder="Phone Number">${item.PhoneNumber}</input>
        <input class="input-location" type="text" placeholder="Location">${item.Location}</input>
      </form>
    `;
  }).join('');
}


export default function(data) {
  return `
    <h2>Edit Contact Information</h2>
    <div>${processData(data)}</div>
    <button type="submit" class="submit-btn" data-to="list">Submit</button>
    <button class="back-btn" data-to="list"><i class="fa fa-arrow-left"></i></button>
  `;
}