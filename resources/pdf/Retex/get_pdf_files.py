#petit script pour récupérer automatiquement la liste des pdf enregistrés dans un dossier (difficile à faire avec JS)

import os
self_path = os.path.dirname(os.path.abspath(__file__))
pdf_path = "/autres"
print(os.listdir(self_path + pdf_path))
print(len(os.listdir(self_path + pdf_path)))
