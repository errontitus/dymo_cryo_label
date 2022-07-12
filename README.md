# dymo_cryo_label

Cryopreservation is an essential function for research laboratories. My preferred approach is to use Cryo Tag labels with a Direct Thermal printer - a low-cost Dymo printer is suitable. Although direct thermal labels can fade in hot or humid environments, they work great for -20, -80, and LN2 environments. Fancier approaches (e.g. expensive Brady printers) are suitable for larger budgets.

This code implments DYMO label printing using Google Drive and Google Apps Script. You keep track of samples in a Google sheet, and numbered tough dots and labels are printed for each tube.

The present implementation prints a cryotube label and a numbered tough dot for the tube cap. The purpose of the app is to coordinate printing of the main label and the dot. The simpler scenario - just printing a label from a cell in a spreadsheet - can be accomplished without script.

Most of the code is generally applicable and can be adapted for other labeling scenarios that require special logic. The basic idea is to provide an extremely low-overhead, multi-user sample-tracking system based on Google sheets.

To get started:

1. Create a Google sheet that contains your label data.
2. From within your sheet, open the script editor for Apps Script code. 
3. Paste the code from this repo into the Server.gs and client.html files.
4. Edit/view the sheet using Google Drive. Print the contents of the highlighted cell from the Add-Ons menu. To print, you need a Mac or PC with a Dymo printer and Dymo print server installed.
5. Adapt the code and label template to your needs. Note that you need to update the rawgit references to point to your own resources.
