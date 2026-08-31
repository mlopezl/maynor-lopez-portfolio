from copy import deepcopy
from docx import Document
from docx.text.paragraph import Paragraph

path = 'CV-Maynor-Lopez-Web-Developer-English.docx'
doc = Document(path)
p = next(p for p in doc.paragraphs if p.text.startswith('Currently learning:'))
p.runs[1].text = ' Node.js (basic knowledge), C#, .NET, ASP.NET Core and API design.'
for r in p.runs[2:]:
    r.text = ''
anchor = next(p for p in doc.paragraphs if p.text.startswith('React.js —'))
if not any('Node.js Fundamentals' in p.text for p in doc.paragraphs):
    new_element = deepcopy(anchor._p)
    anchor._p.addnext(new_element)
    new_paragraph = Paragraph(new_element, anchor._parent)
    new_paragraph.runs[0].text = 'Node.js Fundamentals — December 2025 (11 hours)'
    for r in new_paragraph.runs[1:]:
        r.text = ''
doc.save(path)
print('Updated learning section and added verified Node.js course.')
