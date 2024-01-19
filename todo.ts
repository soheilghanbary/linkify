const social = [
  {
    name: "github",
    url: "https://github.com",
    selected: false,
  },
  {
    name: "facebook",
    url: "https://facebook.com",
    selected: false,
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    selected: false,
  },
  {
    name: "tiktok",
    url: "https://tiktok.com",
    selected: false,
  },
  {
    name: "personal",
    url: "https://",
    selected: false,
  },
]

const selectedSocials = [
  {
    name: "github",
    url: "https://github.com",
  },
  {
    name: "facebook",
    url: "https://facebook.com",
  },
  {
    name: "tiktok",
    url: "https://tiktok.com",
  },
]

const newLinks = social.map((socialItem) => ({
  ...socialItem,
  selected: selectedSocials.some(
    (selectedItem) => selectedItem.name === socialItem.name
  ),
}))

console.log(newLinks)
