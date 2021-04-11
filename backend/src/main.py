from .entities.entity import Session, engine, Base
from .entities.sport_type import SportType

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
types = session.query(SportType).all()

if len(types) == 0:
    # create and persist mock exam
    python_type = SportType(1892732461, "Figure skating")
    session.add(python_type)
    session.commit()
    session.close()

    # reload exams
    types = session.query(SportType).all()

# show existing exams
print('### Sport types:')
for sportType in types:
    print(f'({sportType.id}) {sportType.name}')
