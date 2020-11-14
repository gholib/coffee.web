var user = JSON.parse(localStorage.getItem('user-profile'))

var items = [
  {
    url: "/",
    name: "Главная",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/calculation",
    name: "Расчет",
    slug: "calculation",
    icon: "HomeIcon",
  },
  {
    url:null,
    name: "Добавить",
    slug: "add",
    icon: "PackageIcon",
    submenu:[
      {
        url: "/import",
        name: "Приходы",
        slug: "import",
        status: 'user'
      },
      {
        url: "/menu-item",
        name: "Меню",
        slug: "menuItem",
        status: 'admin'
      },
    ]
  },
]

items = items.map(el => {
  if(el.submenu){
    el.submenu = el.submenu.filter(e => {
      if(e.status && user.status !== 'admin'){
        return e.status === 'user'
      }
       return e
    })
  }
  
  return el
})

export default items
