
import java.util.HashSet;

public class FirstTask{
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 5, 4, 0};
        int[] arr2 = {2, 4, 5, 0, 1};
        System.out.println("These two arrays are identical: " + checkArrays(arr1, arr2));
    }


    public static boolean checkArrays(int[] array1, int[] array2) {

        HashSet<Integer> setForChecking = new HashSet<>();
        boolean result = true;
        for (int element : array1) {
            setForChecking.add(element);
        }

        for (int element : array2) {
            if (setForChecking.add(element)) {
                result = false;
            }
        }
        return result;
    }
}