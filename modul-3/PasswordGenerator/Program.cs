namespace PasswordGenerator
{
    internal class Program
    {
        private static void Main(string[] args)
        {
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

            if (!IsValid(args))
            {
                ShowHelpText();
                return;
            }
            else
            {
                string s = args[0];
                foreach(var c in s)
                {
                    if (!char.IsDigit(c))
                    {
                        Console.WriteLine(formatError);
                    }
                }
                Console.WriteLine(s);
                int passwordLength = Convert.ToInt32(s);
                GeneratePassword(passwordLength, args[1]);
            }
            Console.ReadKey();
        }
        static string GeneratePassword(int t, string p)
        {
            string lower = "abcdefghijklmnopqrstuvwxyz";
            string upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string number = "0123456789";
            string special = "!@#$%^*()[]{},.:~_-="; // avoiding problematic 
            string generatedPwd = "";

            foreach (var c in p)
            {
                if (c == 'l')
                {

                    generatedPwd + "";
                }
                else if (c == 'L')
                {

                }
                else if (c == 'd')
                {

                }
                else if (c == 's')
                {

                }
            }
            return generatedPwd;
        }
        private static bool IsValid(string[] args)
        {
            if (args.Length != 0)
            {
                return false;
            }

            var passLength = args[0];
            var passCriteria = args[1];

            if (!IsValidPattern(passCriteria))
            {
                return false;
            }

            return true;
        }
        private static bool IsValidLength(string passLength)
        {
            return true;
        }
        private static bool IsValidPattern(string options)
        {
            return true;
        }

        static string ShowHelpText()
        {
            public string noArgs = @"
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
            public static string formatError = @"
Please format your arguments. 
Starting with the number of characters you want in your password, then space followed by your criteria.

Options:
  - l = lower case letter
  - L = upper case letter
  - d = digit
  - s = special character (!""#¤%&/(){}[]

Example: PasswordGenerator 14 lLssdd
         Min. 1 lower case
         Min. 1 upper case
         Min. 2 special characters
         Min. 2 digits
";
            return noArgs;
        }
    }
}