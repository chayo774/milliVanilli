sibling=["Wiliam", "Evelina", "Sandra", "Daniela"]
print("Mis hermanos son: ")
for x in range(0,len(sibling)):
    print(x+1,sibling[x])
for x in sibling:
    print(x)
job=[
    {"nombre":"William", "edad":44, "profesion":"Soporte tecnico"},
    {"nombre":"Evelina", "edad":43, "profesion":"Secretaria"},
    {"nombre":"Daniela", "edad":28, "profesion":"Supervisora"}
]
for x in job:
    print(f"Nombre: {x['nombre']}, edad: {x['edad']}, ocupación: {x['profesion']}")
for y in job:
    print(y.values())
for m in range(0, len(sibling)):
    print(f"Number {m+1} is {sibling[m]}")
for n in range(0, len(job)):
    print(f"Mi familiar {job[n]['nombre']} tiene {job[n]['edad']} y trabaja como {job[n]['profesion']}")