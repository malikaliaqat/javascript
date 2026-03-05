
// food page body part


import 'dimension.dart';

Class  FoodPageBody extends StatelessWidget{
  const FoodPageBody  ({Key? key}) : super (key:key);

  @override
  _FoodPageBodyState createState() => FoodPageBodyState();
}
Class FoodPageBodyState extends State<FoodPageBody>{
  PageController pageController = PageController(viewportFraction: 0.85);
  var _currentPageValue = 0.0;
  double _Scalefactor=0.8;
  double _height= Dimensions.pageViewContainer;
  @override
  void initState(){
    super.initState();
    pageController.addListener(() {
      setState(() {
        currentPageValue = pageController.page!;
        print("current value is " + currentPageValue.toString());
      });
    });
  }

@override
void dispose(){
  pageController.dispose();

}
  @override
  Widget build(BuildContext context){
    return Column(
      childern:[
        // slider section
        Container(
      // color: Color.redAccent
      height : Dimensions.pageView,
      child: PageView.builder(
        Controller: pageController,
        itemCount: 5,
        itemBuilder: (Context , position){
        return _buildPageItem(position);
      }),
    ),
      //  dots
        new Dotindicator (
        dotsCount: 5,
        position: currPageValue,
        decorator: DotsDecorator(
        activecolor:AppColors.mainColor,
          size : count Size.square(9.0),
          activeSize: count Size(18.0, 9.0),
          activeShape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0)),
    ),
  ) 
    //  popular text
    SizedBox(height: Dimensions.height30),
    Container(
      margin: EdgeInsets.only(left: Dimensions.width30),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        childern: [
          BigText(text: "Popular"),
          SizedBox(width: Dimensions.width10),
          Container(
            margin:  const EdgeInsets.only(bottom: 3),
            child: BigText(text: ".", color: Colors.black26),
          ),  #container
          SizedBox(width: Dimensions.width10),
          Container(
            margin:  const EdgeInsets.only(bottom: 2),
            child: SmallText(text: "Food pairing"),
          )   #container
         ],
      ),  #Row
    )    #container
    //  list of food and images
  Container(
     height : 700,
     child: ListView.builder(
        physics: NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: 10,
        itemBuilder: (context, index){
          return Container(
             margin: EdgeInsets.only(left: Dimensions.width20, right: Dimensions.width20, bottom: Dimensions.height10),
             child: Row(
               children: [
                // image section
                 Container(
                   width:120,
                   height:120,
                   decoration: BoxDecoration(
                   borderRadius: BorderRadius.circular(Dimensions.radius20),
                   color: Colors.white38,
                   image: DecorationImage(
                    fit: BoxFit.cover,
                   image : AssetImage(
                  "assets/image/food0.png"
                )   #assest image
              )  #decoration image
            )  #box decoration
            )
          )  #container
            // text container
          ],
        )   #row
      );   #container
    }),  #listview.builder
      ) #comtainer
    ],
   );   # colum
  }
  Widget _buildPageItem(int index){
    Matrix4 matrix= new Matrix4.identity();
    if(index==_currentPagevalue.floor()){
      var currScale = 1-(_currentPageValue - index) * (1- scaleFactor);
      var curTrans= _height*(1-currScale)/2;
      matrix = Matrix4.diagonal3Values(1, currScale, 1)..setTranslationRaw(0,curTrans,0)

    } else if(index == _currentPageValue.floor() + 1){
      var currScale = scaleFactor + (_currentPageValue - index + 1) * (1- scaleFactor);
        var curTrans= _height*(1-currScale)/2;
       matrix = Matrix4.diagonal3Values(1, currScale, 1)
      matrix = Matrix4.diagonal3Values(1, currScale, 1)..setTranslationRaw(0,curTrans,0)

    }else if(index == _currentPageValue.floor() - 1){
       var currScale = 1-(_currentPageValue - index) * (1- scaleFactor);
       matrix = Matrix4.diagonal3Values(1, currScale, 1)
      matrix = Matrix4.diagonal3Values(1, currScale, 1)..setTranslationRaw(0,curTrans,0)

    }else{
      var currScale = 0.8;
        matrix = Matrix4.diagonal3Values(1, currScale, 1)..setTranslationRaw(0, _height*1(1-_Scalefactor)/2,1);
    }
    return Transfrom(
      transform: matrix,
      child: stack(
      childern:[
        Container(
           height: Dimensions.pageViewContainer,
           margin: EdgeInsets.only(left:Dimensions.width10, right: Dimensions.width10),
           decoration: BoxDecoration(
                boarderRadius : BorderRadius.circular(Dimensions.radius30),
                color : index:isEven? Color(0xFF69c5df): color(0xFF9294cc)
                image: DecorationImage(
                fit : BoxFit.cover,
                image:AssetImage(
               "assets/image/food1,png"
                ) assent image
              ) #decoration image
            ),  #boxdecoration
           ) ,      #conatiner
           Align (
              aligment: Alignment.bottomCenter,
              child: Container(
                height: Dimensions.pageViewTextContainer,
                margin: EdgeInsets.only(left:Dimensions.width30, right:Dimensions.width30, bottom: Dimensions.heigth30),
                decoration: BoxDecoration(
                    boarderRadius : BorderRadius.circular(Dimensions.radius20),
                     color :  Color.white 
                     boxshadow :[
                       BoxShadow (
                         color: Color (0xFFe8e8e8),
                         blurRadius : 5.0,
                         offser :Offset (0,5)
                      ),
                      Box shadow (
                        color : color.white,
                        offset: Offset(-5,0)
                      ),     #box shadow
                      Box shadow (
                        color : color.white,
                        offset: Offset(-5,0)
                      ) #box shaddow
                     ]                  
                ),       #box decoration
                child: Container(
                  padding: EdgeInsets.only(top: Dimensions.height15, left: 15, right: 15),
                  child: Column(
                    crossAxisAlignment : CrossAxisAlignment.start,
                    childern: [
                      BigText(text: "Chinese Side"),
                      sizedBox(height: Dimensions.height10),
                      Row(
                        childern: [
                          Wrap(
                            childern: List.generate(5, (index) => Icon(Icons.star, color:AppColors.mainColor, size: 15) )
                          ),    #wrap
                          SizedBox(width: 10),
                          SmallText(text: "4.5"),
                          SizedBox(width: 10),
                          SmallText(text: "1287"),
                          SizedBox(width: 10),
                          SmallText(text: "comments")
                        ],  
                      ),
                  ),
                      sizedBox(height: Dimensions.height20),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                             IcontextAndTextWidget(icon: Icons.circle_sharp,
                                  text: "Normal",
                                  iconColor: AppColors.iconColor1),
                            
                             IcontextAndTextWidget(icon: Icons.location_on,
                                   text: "1.7km",
                                   iconColor: AppColors.mainColor),

                              IcontextAndTextWidget(icon: Icons.access_time_rounded,
                                    text: "32min",
                                    iconColor: AppColors.iconColor2),
                        ],       
                      )    #row
                  )
                    ],

                ),      #column
              ),       #container
              
            ),        # container 
          )     #Align
       ],   
     ),  #stack
  );   #transfrom
 }
}
