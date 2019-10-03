# Basic Commands

```
echo x > y.ext = create a file y with the content x and the following format .ext
```

```
 cd = change directory
```
```
cd .. = move to the parent directory
```
```
cd\ = move to the root of current drive
```
```
cd x = move to the current\x directory
```
```
cd z: = change to the z root directory (as opposed to c:)
```
```
copy x y = copy file x to directory y (Ex: D:\games\galaga.exe C:\programs[\awesome.exe]), [] = optional
```
```
copy file con = display file contents in console
```
```
copy con file.txt = create text file in the console window, end with ctrl+z (^z or F6)
```
```
 date = change the date
```
```
 del = delete/erase
```
```
 del x = deletes all files/folders fitting x
```
```
 del . = deletes all files within current directory
```
```
 del *.* = deletes all files within current directory
```
```
dir = display contents of current directory (Ex: dir [c:][\programs]), [] = optional
```
```
dir *.txt = list all .txt files in current directory
```
```
dir *.? = list all files with extensions one character in length in current directory
```
```
dir /w /p *.* = display all contents one screen at a time
```
```
 dir | more = display all contents one line at a time
```
```
 dir /? = provides syntax info and complete list of all dir parameters
```
```
echo = send command line input to display (by default)
```
```
echo sometext » somefile.txt = append line(s) of text to any file
```
```
echo sometext > somefile.txt = overwrites file with sometext
```
```
erase = delete/erase
```
```
exit = exit the command prompt
```
```
filename.txt = opens filename.txt in current directory in Notepad (or default .txt program)
```
```
format z: = format z drive [Ex: use to format a disc or flash drive]
```
```
mkdir x = make directory x in current directory
```
```
move x y = move or rename x to y
```
```
rd x = remove/delete directory x if it’s empty
```
```
ren x y = rename file x to y
```
```
time = change the time
```
```
type file = display the contents of the file ‘file’ (displays file contents in console)
```
```
type file |more = display the contents one line at a time
```
# Advanced Commands

```
ipconfig [/all] = display network adapter information (advanced)
```
```
netstat –n = display local address and addresses you are connected to (advanced)
```
```
netstat –nb = above with name of foreign addresses (advanced) (this shows your private IP, if you are behind a router or proxy, then your public IP address will be different)
```
```
ping google.com = how long it takes for your computer to talk to google.com
```
### CONVERT OUTPUT OF ONE PROCESS INTO INPUT OF ANOTHER PROCESS

```
Send contents of script.js to the system debug.exe file:
type script.js | c:\programs]debug.exe
programs\debug.exe < script.js
```
### SEND DIRECTORY LISTING TO A PRINTER OR FILE

```
dir > prn (theoretically to a printer)
```
```
dir > somefile.txt
```
```
dir *.mp3 > c:\Users\Rajeev\Desktop\musiclist.txt = print all .mp3 files in current directory to musiclist.txt
```
### ENVIRONMENTAL VARIABLES VIA THE DOS COMMAND PROMPT

##### (Hint: Use echo)

```
System-generated upon Windows startup:

%DATE% = Thu 15/08/2019
%TIME% = 14:23:33.37
%SYSTEMROOT% = C:\Windows
%COMPUTERNAME% = Rajeev-PC
```
```
System-generated upon user login:

%USERNAME% = Rajeev
%USERDOMAIN% = Rajeev-PC
```
```
Local machine variables for all users:

%PATH% = C:\Windows\system32
%HOMEPATH% = \Users\Dan
%HOMEDRIVE% = C:
```
### HOTKEYS
```
F1 = Sequential, individual repeat of previously entered characters
```
```
F2 = Copies any number of characters from the previous command line
```
```
F3 = Repeats the contents of the previous command line
```
```
F4 = Deletes any number of characters from the previous command line
```
```
F5 = Return to the previous command line
```
```
F6 = Enters the characters ^z (CTRL+z), indicating “end of file”
```
```
F7 = Displays a history of command-line entries for the current session (50-line cache)
```
```
F8 = Sequentially displays previous command-line entries
```

```
F9 = Enables user to recall previous command lines by number (0 = first line)
```
