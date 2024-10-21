from graphviz import Digraph

# Create a new directed graph
dot = Digraph(comment='Class Diagram for Veterinary Telemedicine Backend')

# Define styles for class nodes
class_node_style = {
    "shape": "record", 
    "style": "filled", 
    "fillcolor": "lightblue"
}

# Define User class
dot.node('User', '''{
    User|
    + idUser: int PK |
    + firstName: varchar |
    + lastName: varchar |
    + email: varchar |
    + phone: varchar |
    + password: varchar |
    + createdAt: datetime |
    + updatedAt: datetime
}''', **class_node_style)

# Define Pet class
dot.node('Pet', '''{
    Pet|
    + idPet: int PK |
    + idUser: int FK |
    + name: varchar |
    + species: varchar |
    + breed: varchar |
    + age: int |
    + weight: float |
    + createdAt: datetime |
    + updatedAt: datetime
}''', **class_node_style)

# Define Appointment class
dot.node('Appointment', '''{
    Appointment|
    + idAppointment: int PK |
    + idUser: int FK |
    + idVetProfile: int FK |
    + appointmentDate: datetime |
    + status: varchar |
    + notes: text |
    + createdAt: datetime |
    + updatedAt: datetime
}''', **class_node_style)

# Define VetProfile class
dot.node('VetProfile', '''{
    VetProfile|
    + idVetProfile: int PK |
    + firstName: varchar |
    + lastName: varchar |
    + specialization: varchar |
    + phone: varchar |
    + email: varchar |
    + createdAt: datetime |
    + updatedAt: datetime
}''', **class_node_style)

# Relationships
dot.edge('User', 'Pet', label='1 to many')
dot.edge('User', 'Appointment', label='1 to many')
dot.edge('VetProfile', 'Appointment', label='1 to many')

# Render the graph to a file
dot.render('vet_telemedicine_class_diagram', format='png')
