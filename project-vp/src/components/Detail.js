import React from 'react'
import loadData from './../ConnectAPI'
import { connect } from 'react-redux'

class Detail extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               dataAPI: []

          }
     }

     componentDidMount() {

          loadData().then((res) => {
               this.props.run(res.data)
               this.setState({
                    dataAPI: this.props.data

               })

          })

     }

     countCmt = () => {
          var element = document.getElementById("middle-area");
          var numberOfChildren = element.children.length
          //this.setState()
          return numberOfChildren / 3
     }

     mapData = () => {
        //var items = []
        var id = parseInt(this.props.match.params.id,10)
        console.log(id);
        
        for (var i = 0; i < this.state.dataAPI.length; i++){

             if(id === i+1){
                  //console.log(i);
                  
                  return <div key={i}>
                  <div className="slider">
                       <div className="display-table  center-text">
                            <h1 className="title display-table-cell"><b>DESIGN</b></h1>
                       </div>
                  </div>
                  <section className="post-area section">
                       <div className="container">
                            <div className="row">
                                 <div className="col-lg-8 col-md-12 no-right-padding">
                                      <div className="main-post">
                                           <div className="blog-post-inner">
                                                <div className="post-info">
                                                     <div className="left-area">
                                                          <a className="avatar" href="google.com"><img src="/images/avatar-1-120x120.jpg" alt="" /></a>
                                                     </div>
                                                     <div className="middle-area">
                                                          <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                          <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                     </div>
                                                </div>
                                                <h3 className="title"><a href="google.com">
                                                     {
                                                          this.state.dataAPI[i]['title']
                                                     }
                                                </a></h3>
                                                <p className="para">{this.state.dataAPI[i]['body']}</p>

                                           </div>
                                           <div className="post-icons-area">
                                                <ul className="post-icons">
                                                     <li><a href="google.com"><i className="ion-heart"></i>57</a></li>
                                                     <li><a href="google.com"><i className="ion-chatbubble"></i>6</a></li>
                                                     <li><a href="google.com"><i className="ion-eye"></i>138</a></li>
                                                </ul>
                                                <ul className="icons">
                                                     <li>SHARE : </li>
                                                     <li><a href="google.com"><i className="ion-social-facebook"></i></a></li>
                                                     <li><a href="google.com"><i className="ion-social-twitter"></i></a></li>
                                                     <li><a href="google.com"><i className="ion-social-pinterest"></i></a></li>
                                                </ul>
                                           </div>
                                           <div className="post-footer post-info">
                                                <div className="left-area">
                                                     <a className="avatar" href="google.com"><img src="/images/avatar-1-120x120.jpg" alt="" /></a>
                                                </div>
                                                <div className="middle-area">
                                                     <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                     <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                     <p>VIET ANH DEP TRAI VL</p>
                                                </div>
                                                <div className="middle-area">
                                                     <a className="name" href="google.com"><b>Viet Anh</b></a>
                                                     <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                     <p>VIET ANH DEP TRAI VL</p>
                                                </div>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                       </div>
                  </section>
             </div>
             }
        }  
        
     }
     render() {
          return (<>
               {this.mapData()}
          </>
          )
     }
}




const mapStateToProps = (state) => {
     return {
          data: state.dataAPI
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          run: (data) => dispatch({
               type: "GET-DATA",
               payload: data
          })
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
