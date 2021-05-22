from flask import Flask, jsonify, request
from flask_cors import CORS
from .entities.entity import Session, engine, Base
from .entities.sport_type import SportType, SportTypeSchema

app = Flask(__name__)
CORS(app)

Base.metadata.create_all(engine)


@app.route('/sport-types')
def get_sport_type():
    session = Session()
    sport_type_objects = session.query(SportType).all()

    schema = SportTypeSchema(many=True)
    sport_types = schema.dump(sport_type_objects)

    session.close()
    return jsonify(sport_types)


@app.route('/sport-types', methods=['POST'])
def add_sport_type():
    new_sport_type = SportTypeSchema(only=('name'))\
        .load(request.get_json())

    sport_type = SportType(**new_sport_type.data, created_by="HTTP post request")

    session = Session()
    session.add(sport_type)
    session.commit()

    added_sport_type = SportTypeSchema().dump(sport_type).data
    session.close()
    return jsonify(added_sport_type), 201
