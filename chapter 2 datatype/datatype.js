// // ....DATATYPES......
// // # datatype is the kind of data a value can hold,its tell the computer what kind of operation perform on data
// // string ,number, boolean , null, undefined, symbol

// const name = 'malika ';
// const age = 30;
// const isMarried=true;
// const rating = 4.5;
// const x=null;
// const y = undefined;
// let z;
// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof x)
// console.log(typeof y)





bigtext dart
import 'pakage:flutter/curpertino.dart';

class BigText extends StatelessWidget{
    Color? color;
   final String text:
   double size;
   TextOverflow overFlow;
    BigText({Key? key , this.color=const Color(0xFF332d2b), 
    required this.text,
    this.size=20,
    this.overFlow=this.TextOverflow.ellipsis
  }) : super (key:key);

   @override 
   widget build (BuildContext context)
  {
    return Text(
      text,
     maxLines: 1,
      overflow: overFlow,
      style: TextStyle(
        fontFamily: 'Roboto',
        color: color,
        fontSize: size
        fontweight :fontweight.w400
      ),
    );
    }
}

smalltextdart 

import 'pakage:flutter/curpertino.dart';

class SmallText extends StatelessWidget{
    Color? color;
   final String text:
   double size;
   double height;
    SmallText({Key? key , this.color=const Color(0xFFccc7c5), 
    required this.text,
    this.size=12,
   this.height=1.2
  }) : super (key:key);

   @override 
   widget build (BuildContext context)
  {
    return Text(
      text,
      style: TextStyle(
        fontFamily: 'Roboto',
        color: color,
        fontSize: size,
         height: height
      ),
    );
    }
}




// food page body part


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
      ],
    );
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
           margin: EdgeInsets.only(left:10, right: 10),
           decoration: BoxDecoration(
                boarderRadius : BorderRadius.circular(30),
                color : index:isEven? Color(0xFF69c5df): color(0xFF9294cc)
                image: DecorationImage(
                fit : BoxFit.cover,
                image:AssetImage(
               "assets/image/food1,png"
                ]
                ), assent image
              ),  #decoration image
            ),  #boxdecoration
           )       #conatiner
          )
           Align (
              aligment: Alignment.bottomCenter,
              child: Container(
                height: Dimensions.pageViewTextContainer,
                margin: EdgeInsets.only(left:30, right:30, bottom: 30),
                decoration: BoxDecoration(
                    boarderRadius : BorderRadius.circular(20),
                     color :  Color.white 
                     boxshadow :[
                      BoxShadow (
                        color: Color (0xFFe8e8e8),
                        blurRadius : 5.0,
                        offser :Offset (0,5)
                      ),
                      box shadow (
                        color : color.white,
                        offset: Offset(-5,0)

                      ),
                        box shadow (
                        color : color.white,
                        offset: Offset(-5,0)

                      )
                     ]     
                                    
                ),       #box decoration
              )
                child: Container(
                  padding: EdgeInsets.only(top: 10, left: 15, right: 15),
                  child: Column(
                    crossAxisAlignment : CrossAxisAlignment.start,
                    childern: [
                      BigText(text: "Chinese Side"),
                      sizedBox(height: 10),
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
                      sizedBox(height: 20),
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
                    ],
                ),      #column
              ),     
            ),   
          
      ],   
     
        );
    }
}

// icon_and_text_widget.dart

Class  IconAndTextWidget extends StatelessWidget{
  final IconData icon;
  final String text;
  // final Color color;
  final Color iconColor;
  const IconAndTextWidget({Key? key,
    required this.icon,
    required this.text,
    //  requires this.color,
    requried this.iconColor}) : super (key:key);

  @override
  Widget build(BuildContext context){
    return Row(
      children:
      [
        Icon(icon, color: iconColor),
        SizedBox(width: 5),
        SmallText(text: text,),  
          ]
    );
  }
}

// dimension. dart 
import 'package:get/get.dart';
class Dimension{
  static double screenHeight = Get.context!.height;
  static double screenwidth = Get.context!.width;

  static double pageView= screenHeight/2.64;

  static double pageViewContainer = screenHeight/3.84;
  static double pageViewTextContainer = screenHeight/7.03;


  static double height10= screenheight/

}