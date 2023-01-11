namespace Hvagjoerkoden
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var range = 250;
            var counts = new int[range];
            string text = "something";
            while (!string.IsNullOrWhiteSpace(text))
            {
                text = Console.ReadLine();
                string textLower = text.ToLower();
                foreach (var character in textLower ?? string.Empty)
                {
                    counts[(int)character]++;
                }
                for (var i = 0; i < range; i++)
                {
                    if (counts[i] > 0)
                    {
                        int countPercent = counts[i] / textLower.Length * 100;
                        var character = (char)i;
                        Console.WriteLine(character + " - " + counts[i] + " - prosent: " + countPercent + @"%");
                    }
                }
            }
        }
    }
}