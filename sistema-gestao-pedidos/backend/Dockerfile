FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY . .
RUN chmod +x mvnw || true
CMD ["./mvnw", "spring-boot:run"]
