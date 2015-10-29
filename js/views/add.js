export default function(data) {
  return `
    <form>
      <input class="input-first" type="text" placeholder="First Name"></input>
      <input class="input-last" type="text" placeholder="Last Name"></input>
      <input class="input-email" type="email" placeholder="Email"></input>
      <input class="input-phone" type="text" placeholder="Phone Number"></input>
      <input class="input-location" type="text" placeholder="Location"></input>
      <button type="submit" class="submit-btn" data-to="list">Submit</button>

    </form>
    <button class="back-btn" data-to="list"><i class="fa fa-arrow-left"></i></button>
  `;
}