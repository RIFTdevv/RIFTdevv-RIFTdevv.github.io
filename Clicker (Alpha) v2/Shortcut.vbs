dim fso: set fso = CreateObject("Scripting.FileSystemObject")
CurrentDirectory = fso.GetAbsolutePathName(".")

Set Shell = CreateObject("WScript.Shell")
DesktopPath = Shell.SpecialFolders("Desktop")
Set link = Shell.CreateShortcut(DesktopPath & "\Clicker.lnk")
link.Description = "A Clicker Game By Calum W"
link.HotKey = "CTRL+ALT+SHIFT+X"
link.IconLocation = CurrentDirectory & "\Assets\icon.ico"
link.TargetPath = CurrentDirectory & "\Main\index.html"
link.WindowStyle = 2
link.WorkingDirectory = "h:\"
link.Save
