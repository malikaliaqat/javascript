
// icon_and_text_widget.dart

import 'dimension.dart';

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
        Icon(icon, color: iconColor),size:Dimension.iconSize24,
        SizedBox(width: 5),
        SmallText(text: text,),  
          ],
    );
  }
}