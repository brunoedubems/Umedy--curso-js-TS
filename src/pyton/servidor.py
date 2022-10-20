import socket
def server(host = 'localhost', port=8082):
    data_payload = 2048 #Máximo de  dados recebido por vez
    # Cria um socket TCP
    sock = socket.socket(socket.AF_INET,  socket.SOCK_STREAM)
    # habilita o reuso de address/port
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    #Liga o socket a porta
    server_address = (host, port)
    print ("Ligado o servidor de echo  no %s na porta %s" % server_address)
    sock.bind(server_address)
    #Escutando clients, especifica o máximo de clientes máximo ao msm tempo
    sock.listen(5)
    i = 0
    while True:
        print ("Esperando para receber mensagens do clientes")
        client, address = sock.accept()
        data = client.recv(data_payload)
        if data:
            print ("Dados: %s" %data)
            client.send(data)
            print ("Enviado %s bytes de volta a %s" % (data, address))
            # Fim da conexão
            client.close()
            i+=1
            #quantidade de mensagens recebidas antes de fechar
            if i>=3: break
server()
