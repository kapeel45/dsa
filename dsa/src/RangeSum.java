//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class RangeSum {
    public static void main(String[] args) {

        int []A = {-3,4,3,6,5,-1,7,0};
        int [][]B = {{1,2}, {4,6}};

        long[] sum = rangeSum(A, B);

        for(int i =0; i< B.length; i++) {
            System.out.println("Sum:: " + sum[i]);
        }
    }

    public static long[] rangeSum(int[] A, int[][] B) {
        long[] prefix = new long[A.length];
        prefix[0] = A[0];

        for(int i =1; i < A.length; i++){
           prefix[i] = prefix[i-1] + A[i];
        }
        long[] arr =new long[B.length];

        for(int i = 0; i < B.length; i++){
            int s = B[i][0];
            int e = B[i][1];
            if(s == 0){
                arr[i] = prefix[e];
            }
            else{
                arr[i] = prefix[e] - prefix[s-1];
            }
        }

        return arr;
    }
}