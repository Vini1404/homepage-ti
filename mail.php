<?php
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"]);
        $phone = trim($_POST["phone"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Preencha o formulário e tente novamente.";
            exit;
        }

        // Set the recipient email address.
        // Note:  Update this to your desired email address.
        $recipient = "marcuspaixao0@gmail.com";

        // Set the email subject.
        $subjectname = "Nono Contato $subject";

        // Build the email content.
        $email_content = "Nome: $name  \r\n\n";
        $email_content .= "E-mail: $email \r\n\n";
        $email_content .= "Assunto: $subject \r\n\n";
        $email_content .= "Telefone: $phone \r\n\n";
        $email_content .= "Mensagem: $message \r\n\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Obrigado! Sua mensagem foi enviada.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ops! Algo deu errado e não foi possível enviar sua mensagem.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Houve um problema com seu envio. Tente novamente.";
    }

?>