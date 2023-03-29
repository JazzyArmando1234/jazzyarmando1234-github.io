fetch(`http://unapiun.home.ro:3000/gg`, {
    method: "GET",
    headers: {
       "Content-Type": "application/json" 
      },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    }
    )