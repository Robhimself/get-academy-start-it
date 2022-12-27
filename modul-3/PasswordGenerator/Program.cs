namespace PasswordGenerator
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            string lower = "abcdefghijklmnopqrstuvwxyz";
            string upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string number = "0123456789";
            string special = "!@#$%^*()[]{},.:~_-="; // avoiding problematic characters

            string title = @"
  ______                                              _   _____                                  _
  | ___ \                                            | | |  __ \                                | |
  | |_/ /  __ _  ___  ___ __      __  ___   _ __   __| | | |  \/  ___  _ __    ___  _ __   __ _ | |_   ___   _ __
  |  __/  / _` |/ __|/ __|\ \ /\ / / / _ \ | '__| / _` | | | __  / _ \| '_ \  / _ \| '__| / _` || __| / _ \ | '__|
  | |    | (_| |\__ \\__ \ \ V  V / | (_) || |   | (_| | | |_\ \|  __/| | | ||  __/| |   | (_| || |_ | (_) || |
  \_|     \__,_||___/|___/  \_/\_/   \___/ |_|    \__,_|  \____/ \___||_| |_| \___||_|    \__,_| \__| \___/ |_|

   __          ___       __   __   _               _____
  / /  __ __  / _ \___  / /  / /  (_)_ _  ___ ___ / / _/
 / _ \/ // / / , _/ _ \/ _ \/ _ \/ /  ' \(_-</ -_) / _/
/_.__/\_, / /_/|_|\___/_.__/_//_/_/_/_/_/___/\__/_/_/
     /___/
                                                                                                            ";
            Console.WriteLine(title);

            if (args == null || args.Length == 0)
            {
                string noArgs = @"
You did not provide any arguments...

Options:
  - l = lower case letter
  - L = upper case letter
  - d = digit
  - s = special character (!""#¤%&/(){}[]

Example: PasswordGenerator 14 lLssdd
         Min. 1 lower case
         Min. 1 upper case
         Min. 2 special characters
         Min. 2 digits";

                Console.WriteLine(noArgs);
            }
            else
            {
            }
        }
    }
}