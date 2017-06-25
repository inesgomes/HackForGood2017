import os, os.path
import random
import string
import sqlite3 as sql
import json

import cherrypy

cur = sql.connect("site_db.db", check_same_thread=False)
db = cur.cursor()

class WebApp(object):

    @cherrypy.expose
    def getUsername(self):
        return 'CSILVA'

    @cherrypy.expose
    def index(self):
        return open("index.html")

    @cherrypy.expose
    def listall(self):
        return open("app/views/listall.html")

    @cherrypy.expose
    def login(self):
        return open("app/views/login.html")

    @cherrypy.expose
    def main(self):
        return open("app/views/main.html")

    @cherrypy.expose
    def profile(self, username):
        return open("app/views/profile.html")

    @cherrypy.expose
    def sendMessage(self):
        return open("app/views/sendMessage.html")

    @cherrypy.expose
    def signup(self):
        return open("app/views/signup.html")

    @cherrypy.expose
    def ticket(self):
        return open("app/views/ticket.html")

    @cherrypy.expose
    def ticketView(self):
        return open("app/views/ticketView.html")

    @cherrypy.expose
    def createTicket(self, type):
        return open("app/views/createTicket.html")


    @cherrypy.expose
    def listAllUsers(self):
        result = db.execute('select * from users')
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['username'] = result[0]
            dictlist[i]['email'] = result[1]
            dictlist[i]['password'] = result[2]
            dictlist[i]['telemovel'] = result[3]
            dictlist[i]['localizacao'] = result[4]
            i+=1
        return json.dumps(dictlist)

    @cherrypy.expose
    def listAllPedidos(self):
        result = db.execute('select * from pedidos')
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['username'] = result[1]
            dictlist[i]['categoria'] = result[2]
            dictlist[i]['titulo'] = result[3]
            dictlist[i]['descricao'] = result[4]
            dictlist[i]['localizacao'] = result[5]
            dictlist[i]['time_stamp'] = result[6]
            i+=1
        return json.dumps(dictlist)

    @cherrypy.expose
    def listAllOfertas(self):
        result = db.execute('select * from ofertas')
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['username'] = result[1]
            dictlist[i]['categoria'] = result[2]
            dictlist[i]['titulo'] = result[3]
            dictlist[i]['descricao'] = result[4]
            dictlist[i]['localizacao'] = result[5]
            dictlist[i]['time_stamp'] = result[6]
            i+=1
        return json.dumps(dictlist)

    @cherrypy.expose
    def listAllMensagens(self):
        result = db.execute('select * from mensagens')
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['recetor'] = result[1]
            dictlist[i]['dador'] = result[2]
            dictlist[i]['oferta'] = result[3]
            dictlist[i]['pedido'] = result[4]
            dictlist[i]['time_stamp'] = result[5]
            dictlist[i]['mensagem'] = result[6]
            i+=1
        return json.dumps(dictlist)

    @cherrypy.expose
    def addUser(self, username, email, password, telemovel, localizacao):
        db.execute('insert into users(username, email, password, telemovel, localizacao) values (?,?,?,?,?)',
        (username, email, password, telemovel, localizacao))
        cur.commit()

    @cherrypy.expose
    def addPedido(self, username, categoria, titulo, descricao, localizacao):
        db.execute('insert into pedidos(username, categoria, titulo, descricao, localizacao) values (?,?,?,?,?)',
        (username, categoria, titulo, descricao, localizacao))
        cur.commit()

    @cherrypy.expose
    def addOferta(self, username, categoria, titulo, descricao, localizacao):
        db.execute('insert into ofertas(username, categoria, titulo, descricao, localizacao) values (?,?,?,?,?)',
        (username, categoria, titulo, descricao, localizacao))
        cur.commit()

    @cherrypy.expose
    def addMensagem(self, recetor, dador, oferta, pedido, mensagem):
        db.execute('insert into mensagens(recetor, dador, oferta, pedido, mensagem) values (?,?,?,?,?)',
        (recetor, dador, oferta, pedido, mensagem))
        cur.commit()

    @cherrypy.expose
    def getEventsByUsername(self, username):
        result = db.execute('select * from pedidos where pedidos.username = ? join select * from ofertas where ofertas.username = ?',(username, username))
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['username'] = result[1]
            dictlist[i]['categoria'] = result[2]
            dictlist[i]['titulo'] = result[3]
            dictlist[i]['descricao'] = result[4]
            dictlist[i]['localizacao'] = result[5]
            dictlist[i]['time_stamp'] = result[6]
            i+=1
        return json.dumps(dictlist)


    @cherrypy.expose
    def getOfertasById(self, id):
        result = db.execute('select * from ofertas where ofertas.id = ?',(id))
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['username'] = result[1]
            dictlist[i]['categoria'] = result[2]
            dictlist[i]['titulo'] = result[3]
            dictlist[i]['descricao'] = result[4]
            dictlist[i]['localizacao'] = result[5]
            dictlist[i]['time_stamp'] = result[6]
            i+=1
        return json.dumps(dictlist)

    @cherrypy.expose
    def getPedidosById(self, id):
        result = db.execute('select * from pedidos where ofertas.id = ?',(id))
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['username'] = result[1]
            dictlist[i]['categoria'] = result[2]
            dictlist[i]['titulo'] = result[3]
            dictlist[i]['descricao'] = result[4]
            dictlist[i]['localizacao'] = result[5]
            dictlist[i]['time_stamp'] = result[6]
            i+=1
        return json.dumps(dictlist)



    @cherrypy.expose
    def getReceivedMensagensByUser(self, username):
        result = db.execute('select * from mensagens where mensagens.receiver = ?', (username))
        data = result.fetchall()
        dictlist = [dict() for x in range(len(data))]
        i = 0
        for result in data:
            dictlist[i]['id'] = result[0]
            dictlist[i]['recetor'] = result[1]
            dictlist[i]['dador'] = result[2]
            dictlist[i]['oferta'] = result[3]
            dictlist[i]['pedido'] = result[4]
            dictlist[i]['time_stamp'] = result[5]
            dictlist[i]['mensagem'] = result[6]
            i+=1
        return json.dumps(dictlist)

if __name__ == '__main__':
    conf = {
    "/": {"tools.staticdir.root": os.path.dirname(os.path.abspath(__file__))},
    "/views": {"tools.staticdir.on": True,
                "tools.staticdir.dir": "views"},
    "/js": {"tools.staticdir.on": True,
            "tools.staticdir.dir": "js"},
    "/css": {"tools.staticdir.on": True,
             "tools.staticdir.dir": "css"},
    "/img": {"tools.staticdir.on": True,
              "tools.staticdir.dir": "img"},
    "/fonts": {"tools.staticdir.on": True,
               "tools.staticdir.dir": "fonts"},
    "/font-awesome": {"tools.staticdir.on": True,
               "tools.staticdir.dir": "font-awesome"},
    }


    #cherrypy.server.socket_host='::'
    cherrypy.quickstart(WebApp(), '/', conf)
