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
    status: 'admin'
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
      {
        url: "/import-type",
        name: "Типы прихода",
        slug: "importType",
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
  }else{
    if(el.status && user.status !== 'admin'){
      return el.status === 'user'
    }
     return el
  }
  
  return el
})

export default items
