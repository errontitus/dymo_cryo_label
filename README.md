# dymo_cryo_label

DYMO label printing using Google Drive and Google Apps Script. 

This code is for printing labels for laboratory cryotubes. The present implementation prints a tube label and a numbered tough dot for the tube cap. Most of the code is generally applicable and can be adapted for other labeling scenarios. The basic idea is to have an extremely low-overhead, multi-user sample-tracking system based on Google sheets.

To use:

1. Create a Google sheet that contains your label text.
2. Open the script editor for Apps Script 
3. Paste the code from this repo into Server.gs and client.html.
4. Edit/view the sheet from anywhere, but print from the Add-Ons menu on a Mac or PC with a Dymo printer and Dymo Framework installed.