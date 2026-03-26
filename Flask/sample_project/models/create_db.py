import sqlite3

conn = sqlite3.connect('ste.db')

cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE user(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT NOT NULL,
               email TEXT UNIQUE NOT NULL
               )
''')

conn.commit()
conn.close()