import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class EmbededTest{

    public static void main(String []args){

        System.out.println("Hello World");

        List<Integer> arrayList=new ArrayList<>();

        arrayList=Arrays.asList(1,2,3,4,5);

        // for(int i:arrayList){

        //     System.out.println("Hello world"+i);
        // }

        arrayList.stream().filter(x->x%2==0).collect(Collectors.toList()).forEach(x->System.out.println(x));;
    }
}