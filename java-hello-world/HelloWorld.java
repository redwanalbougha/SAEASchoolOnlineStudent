import java.util.Optional;

public class HelloWorld {
    public static void main(String[] args) {
        String message = Optional.ofNullable(System.getenv("JAVA_MESSAGE"))
                                 .filter(s -> !s.isBlank())
                                 .orElse("Hello World!");
        System.out.println(message);
    }
}
