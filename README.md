# dymo_cryo_label

DYMO label printing using Google Drive and Google Apps Script. 

This code is for printing labels for laboratory cryotubes. The present implementation prints a cryotube label and a numbered tough dot for the tube cap. Most of the code is generally applicable and can be adapted for other labeling scenarios. The basic idea is to have an extremely low-overhead, multi-user sample-tracking system based on Google sheets.

To get started:

1. Create a Google sheet that contains your label text.
2. Open the script editor for Apps Script 
3. Paste the code from this repo into Server.gs and client.html.
4. Edit/view the sheet using Google Drive. Print the contents of the highlighted cell from the Add-Ons menu. To print, you need a Mac or PC with a Dymo printer and Dymo print server installed.
5. Adapt the code and label template to your needs, updating the rawgit references to point to your own resources.