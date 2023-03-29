fetch(`http://unapiun.home.ro/gg`, {
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