import socket
def client(host = 'localhost', port=8082):
    # Cria o  TCP/IP socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Conecta o socket ao servidor
    server_address = (host, port)
    print ("Conectando a %s port %s" % server_address)
    sock.connect(server_address)
    # Tentando mandar mensagem
    try:
        # mandando mensagem
        message = input("Digite a menssagem:")
        print ("Enviando %s" % message)
        sock.sendall(message.encode('utf-8'))
        # Procurando por mensagem
        amount_received = 0
        amount_expected = len(message)
        while amount_received < amount_expected:
            data = sock.recv(16)
            amount_received += len(data)
            print ("Recebido: %s" % data)
    except socket.error as e:
        print ("Socket error: %s" %str(e))
    except Exception as e:
        print ("Other exception: %s" %str(e))
    finally:
        print ("Conexão fechada")
        sock.close()

client()
