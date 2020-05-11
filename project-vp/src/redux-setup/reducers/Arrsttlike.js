import loadData from '../../ConnectAPI'

var arrsttlike = []
loadData().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          arrsttlike[i] = false
     }
})


const Arrsttlike = (state = arrsttlike, action) => {
     switch (action.type) {
          case "LIKE":
               return [...state,action.payload]
          case "NOT-LIKE":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Arrsttlike