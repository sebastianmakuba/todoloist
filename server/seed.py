from main import app, db
from models import Task

def seed_data():
    # Clear existing tasks
    db.session.query(Task).delete()

    # Add new tasks
    task1 = Task(text='Task 1')
    task2 = Task(text='Task 2', completed=True)
    task3 = Task(text='Task 3')

    # Commit changes to the database
    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_data()
