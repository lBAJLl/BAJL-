public class Main {
    public static void main(String[] args) {
        Main mainInstance = new Main();

        // Виклик методу greet
        String greetingResult = mainInstance.greet("Pen");
        System.out.println(greetingResult);

        // Виклик методу divide
        int divideResult = mainInstance.divide(10, 2);
        System.out.println(divideResult);

        // Виклик методу isEven
        boolean isEvenResult = mainInstance.isEven(5);
        System.out.println(isEvenResult);

        // Виклик методу print з результатом greet
        mainInstance.printString(greetingResult);
    }

    // Метод привітання
    public String greet(String name) {
        return "Hello " + name;
    }

    // Метод ділення
    public int divide(int a, int b) {
        if (b != 0) {
            return a / b;
        } else {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
    }

    // Метод перевірки на парність
    public boolean isEven(int num) {
        return num % 2 == 0;
    }

    // Метод виводу на екран рядка
    public void printString(String string) {
        System.out.println(string);
    }
}