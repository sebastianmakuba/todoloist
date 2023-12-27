from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))
    completed = db.Column(db.Boolean, default=False)

    def __init__(self, text, completed=False):
        self.text = text
        self.completed = completed

    def serialize(self):
        return {
            'id': self.id,
            'text': self.text,
            'completed': self.completed
        }
