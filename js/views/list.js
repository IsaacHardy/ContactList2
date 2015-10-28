function processData(data) {
  return data.map(function(item){
    return `
      <li class="contact-list-item" data-contact-id="${item.objectId}">
        <span>${item.FirstName}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="contact-list">
      <h1>Contact List</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;
}