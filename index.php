<?php

require_once("vendor/autoload.php");

$loader = new \Twig_Loader_Filesystem(__DIR__.'/views');
$twig = new \Twig_Environment($loader);

// Comments data
$comments = array();

for ($i=0; $i < 10; $i++) { 
    $comments['items'][$i] = array(
            'username' => 'CeciEstUnPseudo',
            'date' => 'Il y a 2 heures',
            'comment' => 'Praesent hendrerit risus in quam blandit, nec tempor nisl pharetra. Donec vitae tincidunt lorem. Curabitur maximus, mi quis tincidunt ullamcorper, massa orci pharetra purus, quis dictum lacus enim id nulla.'
        );
}

// Page data
$data = [
    'banner' => [
        'title' => 'Discover smart news for smart people.'
    ],
    'news' => [
        'title' => 'Latest news',
        'items' => [
            0 => [
                'title' => 'Stranger Things 2 Amazing New Posters',
                'description' => 'La deuxième saison de Stranger Things approche à grands pas. Netflix dévoile donc...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_1.jpg',
                    'srcset' => 'public/images/image_1@2x.jpg, public/images/image_1@3x.jpg'
                ]
            ],
            1 => [
                'title' => 'Beautiful Series Across the USA',
                'description' => 'Le photographe Akos Major armé de son Mamiya7, chargé de pellicules Kodak Portra 400...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_2.jpg',
                    'srcset' => 'public/images/image_2@2x.jpg, public/images/image_2@3x.jpg'
                ]
            ],
            2 => [
                'title' => 'Game of Thrones Crystal Made Artworks by Dries Ketels',
                'description' => 'Dans cette série de tableaux, l’artiste Dries Ketels se penche sur la célèbre...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_3.jpg',
                    'srcset' => 'public/images/image_3@2x.jpg, public/images/image_3@3x.jpg'
                ]
            ],
            3 => [
                'title' => 'Colorful Doors of Dublin Illustrations',
                'description' => 'Passionné par l’art et le design, Al Power est un illustrateur irlandais installé à...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_4.jpg',
                    'srcset' => 'public/images/image_4@2x.jpg, public/images/image_4@3x.jpg'
                ]
            ],
            4 => [
                'title' => 'Alexander Semenov Expedition to Shoot...',
                'description' => 'Alexander Semenov est un photographe marin et biologiste qui est en train de conduire...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_5.jpg',
                    'srcset' => 'public/images/image_5@2x.jpg, public/images/image_5@3x.jpg'
                ]
            ],
            5 => [
                'title' => 'Ghostly Floating Installation by Edoardo...',
                'description' => 'Edoardo Tresoldi explore le concept de « fantôme » à travers ses incroyables...',
                $comments,
                'image' => [
                    'src' => 'public/images/image_6.jpg',
                    'srcset' => 'public/images/image_6@2x.jpg, public/images/image_6@3x.jpg'
                ]
            ]
        ]
    ]
];

// Render view with data and comments
echo $twig->render('Core/news.html.twig', [
    'data' => $data,
    'comments' => $comments
]);