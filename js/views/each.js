export default function(data) {
  return `
    <h2>${data.FirstName} ${data.LastName}</h2>
    <button class="back-btn" data-to="list"><i class="fa fa-arrow-left"></i></button>
    <li>${data.Email}<li>
    <li>${data.PhoneNumber}<li>
    <li>${data.Location}<li>
  `;

}