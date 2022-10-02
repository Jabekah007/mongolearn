


import pymongo

from pymongo import MongoClient

cluster=MongoClient('mongodb+srv://Jabekah:Killa1000@cluster0.feiajs0.mongodb.net/?retryWrites=true&w=majority')

db=cluster["sidemo"]

collection = db["userapp"]

post1={"_id":101,"name":"john","email":"john@gmail.com"}
post2={"_id":102,"name":"joe","email":"joe@gmail.com"}

"""collection.insert_many([post1,post2])"""


"""
results=collection.find({"name":"john"})
for result in results:
    print(result)
    print(result["_id"])

result=collection.delete_many({}) 
"""
"""this delete the entire collection"""

collection.update_one({"_id":101},{"$set":{"name":"richard"}})


