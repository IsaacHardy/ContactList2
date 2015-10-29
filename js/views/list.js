function processData(data) {
  return data.map(function(item){
    return `
      <li class="contact-list-item" data-contact-id="${item.objectId}">
        <i class="fa fa-wheelchair"></i>${item.FirstName} ${item.LastName}
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="contact-list">
      <h2>Contact List</h2>
      <ul>${processData(data)}</ul>
      <button class="contact-add-item" data-to="add"><i class="fa  fa-plus-circle"></i>Add Contact</button>
    </div>
  `;
}