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
        return open('views/index.html')


@cherrypy.expose
class WebAppService(object):

    @cherrypy.tools.accept(media='text/plain')
    def GET(self):
        return cherrypy.session['mystring']




if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/generator': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        }
    }

    webapp = WebApp()
    cherrypy.quickstart(webapp, '/', conf)
