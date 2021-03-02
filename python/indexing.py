import os
import json

todolist = ['M:/01 Movies',]
filmlist = []

while len(todolist)>0:
    dirlist = os.listdir(todolist[0])
    for dir in dirlist:        
        full_path = os.path.join(todolist[0],dir)
        if os.path.isdir(full_path):
            todolist.append(full_path)
        elif (full_path.endswith(".mkv") or full_path.endswith(".avi")) and (os.stat(full_path).st_size > 200000000):            
            filmlist.append({
                'filename' : dir,
                'folderpath' : todolist[0],
                'filepath' :full_path,
            })
    todolist.pop(0)


with open('raw_filmlist.json', 'w') as outfile:
    json.dump(filmlist, outfile)