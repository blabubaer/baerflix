import os
listoffolder = []
directory = 'M:/01 Movies/00 Eingang'
dirlist = os.listdir(directory)
for d in dirlist:
    full_path = os.path.join(directory, d)
    listoffolder.append(full_path)
print(len(listoffolder))