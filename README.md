# Scalennger
Scalennger is a simple messanger build in Scala.

## Typy komunikatów (nazwy pól do zmiany, format: JSON)
 - wyslij wiadomość
        - typ: message
        - id uzytkownika
        - id rozmowcy
        - text wiadomości
- dostan historię:
        - typ: getHistory
        - id uzytkownika
        - id rozmowcy
        - liczba wiadomosci
- dostan zanjomych:
        - top: getFriends
        - id uzytkownika
- zaloguj:
        - typ: wyslij swoj ogin i haslo
        - login
        - haslo
        - -is zarejestruj
