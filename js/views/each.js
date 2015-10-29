export default function(data) {
  return `
    <h2>${data.FirstName} ${data.LastName}</h2>
    <button class="back-btn" data-to="list"><i class="fa fa-arrow-left"></i></button>
    <li><i class="fa fa-envelope"></i>${data.Email}</li>
    <li><i class="fa fa-phone"></i>${data.PhoneNumber}</li>
    <li><i class="fa fa-map-marker"></i>${data.Location}</li>
    <button class="contact-edit-item" data-to="edit"><i class="fa  fa-pencil"></i>Edit Contact</button>

  `;

}