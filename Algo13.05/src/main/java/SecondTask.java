import java.util.HashMap;
//Ввод : {1, 7, 4, 3, 4, 8, 7}, k = 2
//Вывод : 7
public class SecondTask {
    public static void main(String[] args) {

        int[] array = {1, 7, 4, 3, 4, 8, 7};
        int n = array.length;
        int k = 2;
        System.out.print("The first Number that appeared twice is: " + firstElementNative(array, n, k));
    }

    public static int firstElementNative(int[] array, int n, int k) {
        HashMap<Integer, Integer> mapForChecking = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int count = 0;
            if (mapForChecking.get(array[i]) != null) {
                count = mapForChecking.get(array[i]);
            }
            mapForChecking.put(array[i], count + 1);
        }
        for (int i = 0; i < n; i++) {
            if (mapForChecking.get(array[i]) == k) {
                return array[i];
            }
        }
        return -1;
    }
}
