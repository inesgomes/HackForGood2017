import os, os.path
import random
import string
import sqlite3 as sql

import cherrypy

cur = sql.connect("site_db.db", check_same_thread=False)
db = cur.cursor()


class WebApp(object):
    @cherrypy.expose
    def index(self):
        return open('index.html')


@cherrypy.expose
class WebAppService(object):

    @cherrypy.tools.accept(media='text/plain')
    def GET(self):
        return cherrypy.session['mystring']




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
               "tools.staticdir.dir": "font-awesome"}}

    webapp = WebApp()
    cherrypy.server.socket_host='::'
    cherrypy.quickstart(webapp, '/', conf)
